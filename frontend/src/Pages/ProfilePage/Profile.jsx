import React from 'react'
import Service from '../../utils/http'
import { useState } from 'react';
import { Stack,Avatar, Center, Container,Text } from '@mantine/core';
import { Loader } from '@mantine/core';
import { useEffect } from 'react';


const Profile = () => {
    const service = new Service();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const  fetchUser = async () =>{
        try{
            const res = await service.get("user/me");
            console.log(res);
            setUser(res);
        }
        catch(err){
            console.log(`There is some error`, err);
        }
        finally{
            setLoading(false);
        }
    };
    useEffect(() =>{
        fetchUser();
    });

    if(loading){
        return (
            <Loader color="blue" />
        )
    }

    if(!user){
        return (
            <div>User not found</div>
        )
    }
   

    return (
        <div>
            <Container>
                <Center> 
                    <Stack
                            h={300}
                            bg="var(--mantine-color-body)"
                            align="stretch"
                            justify="center"
                            gap="md"
                            p="md"
                            style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                            >
                            <Avatar src={user.Avatar} alt="it's me" />
                            <Text>Name: {user.name}</Text>
                            <Text>Email: {user.email}</Text>
                            <Text>{new Date(user.createdAt).toLocaleDateString()}</Text>         
                    </Stack>
                </Center>
            </Container> 
        </div>
    )
}

export default Profile
