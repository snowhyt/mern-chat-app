export const sendMessage = async (req, res) => {
   // console.log("message sent",req.params.id);

try {
    
} catch (error) {
    console.log("Error in sending message". error.message);
    res.status(500).json({error: "Internal Server Error"});
}






};