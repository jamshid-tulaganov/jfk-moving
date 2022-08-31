import React from "react";
import HeaderNav from "../components/Header/HeaderNav";
import Footer from "../components/Footer";
import {
    StorageHeaderComponent
} from "../components/Storage/storage-header/storageHeader.component";
import {
    StorageServiceComponent
} from "../components/Storage/storage-service/storageService.component";
import { StorageReasonComponent } from "../components/Storage/storage-reason/storageReason.component";
import { StorageTypesComponent } from "../components/Storage/storage-types/storageTypes.Component";
import ServiceCarouselComponent from "../components/ServiceCarousel/ServiceCarousel.component";

export const Storage = () => ( 
    <>
        <HeaderNav isLanding = {false} />  
        <StorageHeaderComponent />
        <StorageServiceComponent />
        <StorageTypesComponent />
        <StorageReasonComponent />
        <ServiceCarouselComponent />
        <Footer />
    </>
)