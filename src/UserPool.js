import { CognitoUserPool} from "amazon-cognito-identity-js";
const poolData={
    UserPoolId:"ap-south-1_k2vj4kMdF",
    ClientId:"55e91rkot9l1ee977c6ga026qj"
}
export default new CognitoUserPool(poolData);