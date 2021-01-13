import React, { useState, useEffect } from "react";
import Header from "../../src/container/components/header/header";
import Transaction from "../../src/container/components/Body/transaction";
import Account from "../../src/container/components/Body/account";
import firebase from "../firebase";

function HomePage() {
  const [Name, setName] = useState({
    companyName: "XYZ",
    userName: "Cheng Yang",
    title: "Transaction",
    balance: 108.5,
    lastTransaction: 40.5,
    type: "",
    Income: 1233,
    description: "",
  });

  useEffect(() => {
    firebase
      .database()
      .ref("Tranx/Income")
      .once("value")
      .then((data) => {
        var k = null;
        k = data.val();
        setName({
          ...Name,
          description: k?.Subtitle,
          balance: k?.Amount,
          type: k?.Name,
        });
      });
    //
  }, []);

  return (
    <div>
      <Header companyName={Name.companyName} userName={Name.userName} />
      <Transaction
        title={Name.title}
        balance={Name.balance}
        lastTransaction={Name.lastTransaction}
      />
      <div style={{ display: "flex", margin: "0px 10px" }}>
        <Account
          title={Name.type}
          balance={Name.Income}
          desc={Name.description}
        />
        <Account
          title={Name.type}
          balance={Name.Income}
          desc={Name.description}
        />
      </div>
    </div>
  );
}

export default HomePage;
