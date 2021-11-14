import Header from "component/Header";
import DetailField from "component/DetailField";
import React from "react";
import { Footer } from "component/Footer";


export default function DetailFieldPage() {
    let field = JSON.parse(sessionStorage.getItem("selectedField"));
    console.log(field);
    return(
        <>
            <Header/>
            <DetailField 
                name={field.name}
                sport_type={field.sport_type}
                field_type={field.field_type}
                capacity={field.capacity}
                summary={field.summary}
                price_hour={field.price_hour}
                address={field.address}
            />
            <Footer />
        </>
    )
}
