import moment from "moment";
import { FC } from "react";
import useSWR from "swr";
import { useToken } from "../../store/token";
import { UserData } from "../../types/user";
import fetcher from "../../utils/fetcher";

interface UserProfileProps {}

const UserProfile: FC<UserProfileProps> = () => {
    const token = useToken((state) => state.token);
    const { data: user, error } = useSWR<UserData>(
        [`${process.env.REACT_APP_API_URL}/api/v1/users/me`, token],
        fetcher
    );
    if (error) return <p>Sorry we have an error, try later.</p>;
    if (!user) return <p>Loading... </p>;
    const userCreated = moment(user.created_at).format("DD/MM/YYYY");
    return (
        <div>
            <div className="user-card">
                <span className="user-avatar">
                    {user?.first_name?.charAt(0)}
                </span>
                <div className="flex flex-col">
                    <h4 className="text-xl font-semibold capitalize">
                        Hi, {user.first_name} {user.last_name && user.last_name}
                    </h4>
                    <span className="italic">@{user.username}</span>
                    <span>Email: {user.email}</span>
                    <span className="text-sm">
                        Account created: {userCreated}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
