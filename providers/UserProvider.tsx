// Copyright (c) 2023 KibaOfficial
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProviderProps {
    children: React.ReactNode
}

const UserProvider: React.FC<UserProviderProps> = ({
    children
}) => {
    return ( 
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
     );
}
 
export default UserProvider;