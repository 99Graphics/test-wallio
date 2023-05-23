signInFalse()

let transactionRow = document.querySelectorAll(".transaction-history-row")
for (let i = 0; i < transactionRow.length; i++) {
    transactionRow[i].style.background += "transparent"
    transactionRow[i].addEventListener("click", () => {
        for (let i = 0; i < transactionRow.length; i++) {
            transactionRow[i].style.background = "transparent"
        }
        transactionRow[i].style.background = "#E9ECF8"
    })
}

//approval Btns
const approvalBtns = document.querySelectorAll(".approval-card-btn");
const pendStatus = document.getElementById("pending-status");
//console.log(pendStatus)

for (let i = 0; i < approvalBtns.length; i++) {
    approvalBtns[i].addEventListener("click", () => {
        // console.log("work")
        console.log(approvalBtns[i].classList)
        if (approvalBtns[i].classList.contains("approval-card-btn-decline")) {
            console.log("decline clicked")
            pendStatus.classList.remove("transaction-table-status-btn-pending");
            pendStatus.classList.add("transaction-table-status-btn-cancel");
            pendStatus.innerText = "Cancelled";
        } else if (
            approvalBtns[i].classList.contains("approval-card-btn-approve"
            )) {
            console.log("approve clivk")
            pendStatus.classList.remove("transaction-table-status-btn-pending");
            pendStatus.classList.add("transaction-table-status-btn-completed");
            pendStatus.innerText = "Completed";
        } else {
            console.log("kuch bhi")
        }
    });
}

const categoryClassesArr = document.querySelectorAll(".transaction-emoji-category h4")
let categoryArr = [...categoryClassesArr]
categoryArr.map((ele, i) => {
    let categoryName = ele?.innerText
    switch (categoryName) {
        case "💰 Allowance":
            ele.style.backgroundColor = "rgba(120, 91, 166, 0.3)";
            ele.style.color = "rgb(120, 91, 166)";
            break;
        case "🚗 Car":
            ele.style.backgroundColor = "rgba(131, 33, 33, 0.3)";
            ele.style.color = "rgb(131, 33, 33)";
            break;
        case "🥰 Charitable Giving":
            ele.style.backgroundColor = "rgba(136, 133, 2, 0.3)";
            ele.style.color = "rgb(136, 133, 2)";
            break;
        case "👕 Clothing":
            ele.style.backgroundColor = "rgba(0, 132, 139, 0.3)";
            ele.style.color = "rgb(0, 132, 139)";
            break;
        case "💎 Digital Assets":
            ele.style.backgroundColor = "rgba(85, 184, 232,0.3)";
            ele.style.color = "rgb(85, 184, 232)";
            break;
        case "🍿 Entertainment":
            ele.style.backgroundColor = "rgba(241, 17, 17, 0.3)";
            ele.style.color = "rgb(241, 17, 17)";
            break;
        case "🎮 Gaming":
            ele.style.backgroundColor = "rgba(120, 22, 103, 0.3)";
            ele.style.color = "rgb(120, 22, 103)";
            break;
        case "🛒 Groceries":
            ele.style.backgroundColor = "rgba(22, 120, 43, 0.3)";
            ele.style.color = "rgb(22, 120, 43)";
            break;
        case "👟 Gym":
            ele.style.backgroundColor = "rgba(4, 146, 194, 0.3)";
            ele.style.color = "rgb(4, 146, 194)";
            break;
        case "🩺 Health Care":
            ele.style.backgroundColor = "rgba(214, 122, 177, 0.3)";
            ele.style.color = "rgb(214, 122, 177)";
            break;
        case "🏠 Home":
            ele.style.backgroundColor = "rgba(154, 15, 15, 0.3)";
            ele.style.color = "rgb(154, 15, 15)";
            break;
        case "💲 Income":
            ele.style.backgroundColor = "rgba(4, 116, 20, 0.3)";
            ele.style.color = "rgb(4, 116, 20)";
            break;
        case "☂️ Insurance":
            ele.style.backgroundColor = "rgba(168, 148, 3, 0.3)";
            ele.style.color = "rgb(168, 148, 3)";
            break;
        case "📊 Investment":
            ele.style.backgroundColor = "rgba(0, 68, 255, 0.3)";
            ele.style.color = "rgb(0, 68, 255)";
            break;
        case "🚚 Moving":
            ele.style.backgroundColor = "rgba(167, 124, 0, 0.3)";
            ele.style.color = "rgb(167, 124, 0)";
            break;
        case "🤷‍ Other":
            ele.style.backgroundColor = "rgba(9, 10, 12, 0.3)";
            ele.style.color = "rgb(9, 10, 12)";
            break;
        case "✂️ Personal Care":
            ele.style.backgroundColor = "rgba(242, 82, 120, 0.3)";
            ele.style.color = "rgb(242, 82, 120)";
            break;
        case "🐶 Pets":
            ele.style.backgroundColor = "rgba(221, 92, 4, 0.3)";
            ele.style.color = "rgb(221, 92, 4)";
            break;
        case "🥳 Recreation":
            ele.style.backgroundColor = "rgba(64, 35, 110, 0.3)";
            ele.style.color = "rgb(64, 35, 110)";
            break;
        case "🍔 Restaurants":
            ele.style.backgroundColor = "rgba(193, 147, 2, 0.3)";
            ele.style.color = "rgb(193, 147, 2)";
            break;
        case "🏦 Savings":
            ele.style.backgroundColor = "rgba(136, 3, 112, 0.3)";
            ele.style.color = "rgb(136, 3, 112)";
            break;
        case "🛍️ Shopping":
            ele.style.backgroundColor = "rgba(168, 148, 3, 0.3)";
            ele.style.color = "rgb(168, 148, 3)";
            break;
        case "⚾ Sports":
            ele.style.backgroundColor = "rgba(3, 95, 6, 0.3)";
            ele.style.color = "rgb(3, 95, 6)";
            break;
        case "🔄 Subscriptions":
            ele.style.backgroundColor = "rgba(30, 40, 89, 0.3)";
            ele.style.color = "rgb(30, 40, 89)";
            break;
        case "🚌 Transportation":
            ele.style.backgroundColor = "rgba(172, 74, 0, 0.3)";
            ele.style.color = "rgb(172, 74, 0)";
            break;
        case "✈️ Travel":
            ele.style.backgroundColor = "rgba(0, 54, 255, 0.3)";
            ele.style.color = "rgb(0, 54, 255)";
            break;
        case "🛠️ Utilities":
            ele.style.backgroundColor = "rgba(105, 47, 0, 0.3)";
            ele.style.color = "rgb(105, 47, 0)";
            break;
        case "🖥️ Work Expenses":
            ele.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
            ele.style.color = "rgba(0, 0, 0)";
            break;
    }
})
const statusClassesArr = document.querySelectorAll(".my-status-class p")
let stateArr = [...statusClassesArr]
stateArr.map((ele) => {
    let statusText = ele?.innerText
    switch (statusText) {
        case "Needs Review":
            ele.style.backgroundColor = "rgba(201, 153, 32, 0.2)";
            ele.style.color = "rgb(201, 153, 32)";
            break;
        case "Pending":
            ele.style.backgroundColor = "rgba(221, 92, 4, 0.2)";
            ele.style.color = "rgb(221, 92, 4)";
            break;
        case "Completed":
            ele.style.backgroundColor = "rgba(61, 202, 177, 0.2)";
            ele.style.color = "RGB(61, 202, 177)";
            break;
        case "Canceled":
            ele.style.backgroundColor = "rgba(241, 87, 87, 0.2)";
            ele.style.color = "rgb(241, 87, 87)";
            break;
    }
})
const filterContShow = (btn, showcont, hidecont1, hidecont2, hidecont3, hidecont4, hidecont5, hidecont6) => {
    document.querySelector(btn).addEventListener("click", () => {
        document.querySelector(showcont).style.display = "block"
        document.querySelector(hidecont1).style.display = "none"
        document.querySelector(hidecont2).style.display = "none"
        document.querySelector(hidecont3).style.display = "none"
        document.querySelector(hidecont4).style.display = "none"
        document.querySelector(hidecont5).style.display = "none"
        document.querySelector(hidecont6).style.display = "none"
    })
}
filterContShow(".memberfilterbtn", ".memberfiltercont", ".accountfiltercont", ".categoryfiltercont", ".txtypefiltercont", ".statusfiltercont", ".dateyearfiltercont", ".datemonthfiltercont")
filterContShow(".accountfilterbtn", ".accountfiltercont", ".memberfiltercont", ".categoryfiltercont", ".txtypefiltercont", ".statusfiltercont", ".dateyearfiltercont", ".datemonthfiltercont")
filterContShow(".categoryfilterbtn", ".categoryfiltercont", ".memberfiltercont", ".accountfiltercont", ".txtypefiltercont", ".statusfiltercont", ".dateyearfiltercont", ".datemonthfiltercont")
filterContShow(".transactiontypefilterbtn", ".txtypefiltercont", ".memberfiltercont", ".accountfiltercont", ".categoryfiltercont", ".statusfiltercont", ".dateyearfiltercont", ".datemonthfiltercont")
filterContShow(".statusfilterbtn", ".statusfiltercont", ".memberfiltercont", ".accountfiltercont", ".categoryfiltercont", ".txtypefiltercont", ".dateyearfiltercont", ".datemonthfiltercont")
filterContShow(".datefilterbtn", ".dateyearfiltercont", ".memberfiltercont", ".accountfiltercont", ".categoryfiltercont", ".txtypefiltercont", ".statusfiltercont", ".datemonthfiltercont")
const yearfiltercont = (btn) => {
    document.querySelector(btn).addEventListener("click", () => {
        document.querySelector(".datemonthfiltercont").style.display = "block"
    })
}
yearfiltercont(".year2023filter")
yearfiltercont(".year2022filter")
yearfiltercont(".year2021filter")
document.querySelector(".filterbtnshowhide").addEventListener("click", () => {
    document.querySelector(".memberfiltercont").style.display = "none"
    document.querySelector(".accountfiltercont").style.display = "none"
    document.querySelector(".categoryfiltercont").style.display = "none"
    document.querySelector(".txtypefiltercont").style.display = "none"
    document.querySelector(".statusfiltercont").style.display = "none"
    document.querySelector(".dateyearfiltercont").style.display = "none"
    document.querySelector(".datemonthfiltercont").style.display = "none"
    if (document.querySelector(".alltypefiltercont").style.display == "block") {
        document.querySelector(".alltypefiltercont").style.display = "none"
    } else {
        document.querySelector(".alltypefiltercont").style.display = "block"
    }
})


//it will give all transactions data 
const allTransactionRowData = document.querySelectorAll(".transaction-history-row")
const allTransactionDataArr = [...allTransactionRowData]


//handle member click
let membersSelectorsArr = document.querySelectorAll(".div-block-11")
let userMembersArr = [...membersSelectorsArr]
userMembersArr.map((ele) => {
    ele.addEventListener("click", () => {
        let clickedmember = ele.innerText
        let trimedMember = clickedmember.replace(/\s{2,}/g, ' ').trim()

        allTransactionDataArr.map((ele, i) => {
            if (i !== 0) {
                let txMemberRowText = ele.querySelector(".transaction-member").innerText;
                let trimedTxMemberRowText = txMemberRowText.replace(/\s{2,}/g, ' ').trim()

                console.log("**" + trimedTxMemberRowText + "**")
                console.log("**" + trimedMember + "**")

                if (trimedTxMemberRowText == trimedMember) {
                    ele.style.display = "flex"
                } else {
                    ele.style.display = "none"
                }
            }
        })
    })
})

//handle account click
let accountsSelectorsArr = document.querySelectorAll(".div-block-14")
let userAccountsArr = [...accountsSelectorsArr]
userAccountsArr.map((ele) => {
    ele.addEventListener("click", () => {
        let clickedAccount = ele.innerText
        let trimedAccountName = clickedAccount.replace(/\s{2,}/g, ' ').trim()

        allTransactionDataArr.map((ele, i) => {
            if (i !== 0) {
                let txAccountRowText = ele.querySelector(".my-account-class").innerText;
                let trimedTxAccountRowText = txAccountRowText.replace(/\s{2,}/g, ' ').trim()

                if (trimedTxAccountRowText == trimedAccountName) {
                    ele.style.display = "flex"
                } else {
                    ele.style.display = "none"
                }
            }
        })
    })
})

//handle category click
let categoriesSelectorsArr = document.querySelectorAll(".div-block-16")
let categoriesArr = [...categoriesSelectorsArr]
categoriesArr.map((ele) => {
    ele.addEventListener("click", () => {
        let clickedCategory = ele.innerText
        let trimedClickedCategory = clickedCategory.replace(/\s{2,}/g, ' ').trim()
        allTransactionDataArr.map((ele, i) => {
            if (i !== 0) {
                let txCategoryRowText = ele.querySelector(".transaction-emoji-category").innerText;
                let trimedTxCategoryRowText = txCategoryRowText.replace(/\s{2,}/g, ' ').trim()

                if (trimedTxCategoryRowText == trimedClickedCategory) {
                    ele.style.display = "flex"
                } else {
                    ele.style.display = "none"
                }
            }
        })
    })
})

//handle transaction types click
let txTypesSelectorsArr = document.querySelectorAll(".div-block-18")
let txTypesArr = [...txTypesSelectorsArr]
txTypesArr.map((ele) => {
    ele.addEventListener("click", () => {
        let clickedTxType = ele.innerText
        let trimedClickedTxType = clickedTxType.replace(/\s{2,}/g, ' ').trim()

        allTransactionDataArr.map((ele, i) => {
            if (i !== 0) {
                let txTransactionNameRowText = ele.querySelector(".transaction-tx-name").innerText;
                let trimedTxTransactionNameRowText = txTransactionNameRowText.replace(/\s{2,}/g, ' ').trim()

                if (trimedTxTransactionNameRowText == trimedClickedTxType) {
                    ele.style.display = "flex"
                } else {
                    ele.style.display = "none"
                }
            }
        })
    })
})

//handle status click
let statusSelectorsArr = document.querySelectorAll(".statusfiltertext")
let statusArr = [...statusSelectorsArr]
statusArr.map((ele) => {
    ele.addEventListener("click", () => {
        let clickedStatus = ele.innerText
        let trimedClickedStatus = clickedStatus.replace(/\s{2,}/g, ' ').trim()

        allTransactionDataArr.map((ele, i) => {
            if (i !== 0) {
                let txStatusRowText = ele.querySelector(".my-status-class").innerText;
                let trimedTxStatusRowText = txStatusRowText.replace(/\s{2,}/g, ' ').trim()

                if (trimedTxStatusRowText == trimedClickedStatus) {
                    ele.style.display = "flex"
                } else {
                    ele.style.display = "none"
                }
            }
        })
    })
})













