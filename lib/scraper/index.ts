export async function scrapeProductAmazon(productUrl: string) {
   if(!productUrl) {
       return
   }

   // Bright data proxy configuration




   const username = String(process.env.BRIGHT_DATA_USERNAME)
   const password = String(process.env.BRIGHT_DATA_PASSWORD)

   const port = 22225
   const section_id = (1000000 * Math.random()) | 0;

   const options = {
    auth : {
        username: `${username}-session-${section_id}`,
        password,
    },
    host: 'brd.superproxy.io',
    port,
    rejectUnauthorized: false,
    };

    try{

    }catch(error: any){
       throw new Error("Erro ao buscar produto na Amazon")
    }
}