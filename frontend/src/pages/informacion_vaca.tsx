import { AuthButton, useRestActor } from "@bundly/ares-react";
import { headers } from "next/headers";
import { useEffect, useState } from "react";

export default function informacion_vaca() {
    const backend = useRestActor("backend");
    const [users, setusers] = useState<any[]>([]);

    useEffect(() => {
        getinformacion_vaca();


    },[]);
    

    const getinformacion_vaca =async ()=>{
    try {
        const response = await backend.get("/api/get",{
        headers:{
            "content-type": "application/json"
        }
        
        });

        setusers(response.data as any)

        console.log((response));       
    }   catch (error) {
        console.error((error));
    }

    };

    return(
        <div>
            <table>
                <tr><th>nombre de la vaca</th>
                <th>id de la vaca</th>
                </tr>
               
                    {
                         
                        users.map(user => (
                            <tr>
                            <td>{user.name}</td>
                            <td>{user.clave}</td>
                            </tr>
                            ))
                    }
                
            </table>

        </div>



    )

}