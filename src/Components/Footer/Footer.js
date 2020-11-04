import React from "react";

function Home() {
    return (
        <div className="footer t-200 bg-white text-center text-dark bg-dark p-3 w-100 position-absolute fixed-bottom">
            &copy; {new Date().getFullYear()} Copyright
        </div>
    );
}

export default Home;