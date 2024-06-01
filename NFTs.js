const NFTs=[];  //an array to store the NFTs


//function to define the NFT objects and store it into array
function mintNFT (_name, _age, _gender, _nationality, _martialstatus) { 
    const NFT={
        "name": _name,
        "age": _age,
        "gender": _gender,
        "nationality": _nationality,
        "martialStatus": _martialstatus,
    }
    NFTs.push(NFT);
    console.log("Minted: "+ _name);
}



//function to print the data stored in the array
function listNFTs () {  
    for(let i=0;i<NFTs.length;i++){
        console.log("\nName:\t\t\t"+NFTs[i].name);
        console.log("Age:\t\t\t"+NFTs[i].age);
        console.log("Gender:\t\t\t"+NFTs[i].gender);
        console.log("Nationality:\t"+NFTs[i].nationality);
        console.log("Martial Status: "+NFTs[i].martialStatus);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() { 
console.log("\nTotal number of NFTs are : "+NFTs.length);
}

// calling the function
mintNFT("Maxwell", 12, "Male", "American", "Single" );
mintNFT("Jane Smith", 28, "Female", "Canadian", "Married");
mintNFT("Carlos Martin", 35, "Male", "Mexican", "Married");
mintNFT("John Abraham", 51, "Male", "Indian", "Married" );
listNFTs();
getTotalSupply();
