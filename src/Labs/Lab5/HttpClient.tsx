import React, { useEffect, useState } from "react";
import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function HttpClient() {
    const [welcomeOnClick, setWelcomeOnClick] = useState("");
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

    const fetchWelcomeOnClick = async () => {
        try {
            const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
            setWelcomeOnClick(response.data);
        } catch (error) {
            console.error("Error fetching welcome message", error);
        }
    };

    const fetchWelcomeOnLoad = async () => {
        try {
            const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
            setWelcomeOnLoad(response.data);
        } catch (error) {
            console.error("Error fetching welcome message", error);
        }
    };

    useEffect(() => {
        fetchWelcomeOnLoad();
    }, []);

    return (
        <div>
            <h3>HTTP Client</h3>
            <hr />
            <h4>Requesting on Click</h4>
            <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
                Fetch Welcome
            </button>
            <br />
            Response from server: <b>{welcomeOnClick}</b>
            <hr />
            <h4>Requesting on Load</h4>
            Response from server: <b>{welcomeOnLoad}</b>
        </div>
    );
}