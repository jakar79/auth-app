import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
      strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
          type: "credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "name@email.com"},
            password: { label: "Pssword", type: "password"}
          },
          authorize(credentials, req){
                //return {}
                //throw new Error()
                const { email, password } = credentials as { 
                    email: string;
                    password: string;
                };
                // perform your login logic
                // find out user from db
                //simple ex:
                if(email !== 'jakar@gmail.com' || password !== '123456'){
                    //return null;
                    throw new Error('invalide credentials')
                }

                //if everyyhing is fine
                return { 
                    id: "012345",
                     name: "Karim JABRI",
                      email: "jakar@gmail.com"
                    };
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",
        error: "/auth/error",
        signOut: "/auth/signout",
    },
};


export default NextAuth(authOptions);