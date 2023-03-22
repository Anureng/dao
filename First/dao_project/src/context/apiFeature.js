import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/contract";

export const connectingWithContract = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addressAbiSigner = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    );
    return addressAbiSigner;
  } catch (error) {
    console.log("can't connect to the blockchain", error);
  }
};
