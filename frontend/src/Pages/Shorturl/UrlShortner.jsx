import React from 'react'
import Service from '../../utils/http'
import {useState, useEffect} from "react";
import { Stack, TextInput } from '@mantine/core';
import { Button } from '@mantine/core';
import { IconAlignBoxBottomCenter } from '@tabler/icons-react';


const UrlShortner = () => {
    const service = new Service();
    const [data, setData] = useState(null);
    const [shortUrl, setShortUrl] = useState("");
    const handleSubmit = async () => {
        try{
            const res = await service.post("s", data);
            console.log(res);
            setShortUrl(`https://url-shortener-bootcamp.onrender.com/api/s/${res.shortCode}`);
        }
        catch(err){
            console.log(`Post api failed`, err);
        }
    };
    useEffect(()=>{
        console.log(shortUrl);
        
    }, [shortUrl]);

    return (
    <>
     {shortUrl && shortUrl.length>0 ? <p>{shortUrl}</p>:
    <Stack>
        <TextInput
        variant="filled"
        label="Original Url"
        withAsterisk
        description="Input description"
        placeholder="Enter the url"
        onChange = {(event) => setData({...data, originalUrl: event.target.value})}
        />
        <TextInput
        variant="filled"
        label="Custom url"
        description=""
        placeholder="Enter the text"
        onChange = {(event) => setData({...data, shortCode: event.target.value})}
        />
        <TextInput
        variant="filled"
        label="Title"
        description=""
        placeholder="Enter the Title"
        onChange = {(event) => setData({...data, title: event.target.value})}
        />
    <Button variant="outline"
        onClick = {handleSubmit}
        >
        Shorten the Url
        </Button>;
    </Stack>
}
</>
)
}

export default UrlShortner
