import EnvironmentVariables from "./EnvironmentVariables";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import HttpClient from "./HttpClient";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
export default function Lab5() {
    return (
        <div id="wd-lab5">
            <h1>Lab 5</h1>
            <div className="list-group">
                <a href="http://localhost:4000/lab5/welcome"
                   className="list-group-item">
                    Welcome
                </a>
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