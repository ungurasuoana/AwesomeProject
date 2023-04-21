import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";

export const useConnection = () => {

    const [connection, setConnection] = useState<boolean | null>()
    const [realNet, setRealNet] = useState<boolean | null>()

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            //console.log("Connection type", state.type);
            console.log("Is it reacheable?", state.isInternetReachable);
            console.log("Is connected?", state.isConnected);

            setConnection(state.isConnected)
            setRealNet(state.isInternetReachable)

        })

        return () => unsubscribe();
    })

    return connection;
}