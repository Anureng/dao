import AllUser from "@/pages/components/AllUser";
import ApproveMembership from "@/pages/components/ApproveMembership";
import Navbar from "@/pages/components/Navbar";
import UserAdd from "@/pages/components/UserAdd";
import { connectingWithContract } from "@/context/apiFeature";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/contract";
import { useContract } from "wagmi";
import { useContractRead } from "wagmi";
import CreateProposal from "./components/CreateProposal";
import Vote from "./components/Vote";
import VoteCount from "./components/VoteCount";
import VoteFinish from "./components/VoteFinish";
import Allproposal from "./components/Allproposal";
import UserProposal from "./components/UserProposal";

export default function Home() {
  const contract = useContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
  });
  const { data, isError, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "owner",
  });

  console.log("This is the owner", data);
  console.log(contract);
  return (
    <>
      {/* <div>You are the owner of the contract: {data}</div> */}
      <Navbar />
      <UserAdd />
      <AllUser />
      <ApproveMembership />
      <CreateProposal />
      <UserProposal />
      <Allproposal />
      <Vote />
      <VoteCount />
      <VoteFinish />
    </>
  );
}
