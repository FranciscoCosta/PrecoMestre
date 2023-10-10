"use server"

import { toast } from "react-toastify"
import { scrapeProductAmazon } from "../scraper"

export async function scrapeAndStoreProduct(productUrl: string, storeName: string) {
    if(!productUrl) {
        return
    }

    if (storeName == "amazon") {
        const prdocutInfo = await scrapeAndStoreFromAmazon(productUrl)
}



}

const scrapeAndStoreFromAmazon = async (productUrl: string) => {

    try{
        const scrapedProductAmazon = await scrapeProductAmazon(productUrl); 

    }catch(error: any){
        toast.error("Erro ao buscar produto na Amazon")
    }
}
