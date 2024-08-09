import EnvironmentVariables from "./EnvironmentVariables";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import HttpClient from "./HttpClient";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function Lab5() {
    return (
        <div id="wd-lab5">
            <h1>Lab 5</h1>
            <div className="list-group">
                <a href={`${REMOTE_SERVER}/lab5/welcome`}>Hello</a>
                <h2>Calculator</h2>
                <EncodingParametersInURLs />
            </div><hr/>
            <EnvironmentVariables />
            <WorkingWithObjects />
            <WorkingWithArrays />
            <HttpClient />
            <WorkingWithObjectsAsynchronously />
            <WorkingWithArraysAsynchronously />
        </div>
    );
}
