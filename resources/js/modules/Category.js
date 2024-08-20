import React from "react";
import {Link} from '@inertiajs/inertia-react';
import AppLayout from "../layouts/AppLayout";

const Home = () => {
    return(
        <AppLayout>
            <div>
                <h1>Hellos</h1>
                <Link href={base_url+'/'}>Home</Link>
            </div>
        </AppLayout>
    )
}

export default Home