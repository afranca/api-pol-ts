import { UserType } from "../models/users";

export const deriveUserType = (role: string | undefined, occupation: string | undefined) => {
    let type: UserType;
    if (role && occupation ){
        type = UserType.poweruser;  
    } else if (role){
        type = UserType.admin;  
    } else if (occupation){
        type = UserType.employee;  
    } else {
        throw new Error('Missing both, role and occupation fields');
    }    
    return type;
}