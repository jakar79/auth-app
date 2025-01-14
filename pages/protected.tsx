import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";



const Protected: NextPage = (): JSX.Element => {
    const { status, data } = useSession();

    useEffect(()=> {
        if (status === "unauthenticated") Router.replace("/auth/signin");
    }, [status]);

    if (status === "authenticated")
        return(
            <div>
                This page is Protected !!!. like{"\n"}
                {JSON.stringify(data.user, null, 2)}
            </div>
        );
    return <div>loading</div>

    //const session = useSession();
    //console.log(session)
    //return <div>This page is Protected !!!</div>
};

export default Protected