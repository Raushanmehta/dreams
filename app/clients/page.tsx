"use client";

import React from "react";
import BreadCrumb from "@/components/common/BreadCrumb";
import ClientSection from "@/sections/ClientSection";
import siteData from "@/data/site.json";

export default function ClientsPage(): React.JSX.Element {
    return (
        <main>
            
            <BreadCrumb
                title="Our Clients"
                subtitle="We collaborate with an elite network of institutional partners and enterprise leaders."
            />
            
            <ClientSection data={siteData.clients} />
        </main>
    );
}