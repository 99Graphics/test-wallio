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

for (let i = 0; i < approvalBtns.length; i++) {
    approvalBtns[i].addEventListener("click", () => {
        console.log(approvalBtns[i].classList)
        if (approvalBtns[i].classList.contains("approval-card-btn-decline")) {
            pendStatus.classList.remove("transaction-table-status-btn-pending");
            pendStatus.classList.add("transaction-table-status-btn-cancel");
            pendStatus.innerText = "Cancelled";
        } else if (
            approvalBtns[i].classList.contains("approval-card-btn-approve"
            )) {
            pendStatus.classList.remove("transaction-table-status-btn-pending");
            pendStatus.classList.add("transaction-table-status-btn-completed");
            pendStatus.innerText = "Completed";
        } else {
            console.log("kuch bhi")
        }
    });
}




//to add background-color and font-color in category cell in table row 
const categoryClassesArr = document.querySelectorAll(".transaction-emoji-category h4")
let categoryArr = [...categoryClassesArr]
const addBGColorAndColorToCategory = () => {
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
}
addBGColorAndColorToCategory()




//to add background-color and font-color in status cell in table row 
const statusClassesArr = document.querySelectorAll(".my-status-class p")
let stateArr = [...statusClassesArr]
const toAddColorInStatusCell = () => {
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
}
toAddColorInStatusCell()


//to handle filters show-hide
const filterContShow = (btn, showcont, hidecont1, hidecont2, hidecont3, hidecont4, hidecont5, hidecont6, hidecont7) => {
    document.querySelector(btn).addEventListener("click", () => {
        document.querySelector(showcont).style.display = "block"
        document.querySelector(hidecont1).style.display = "none"
        document.querySelector(hidecont2).style.display = "none"
        document.querySelector(hidecont3).style.display = "none"
        document.querySelector(hidecont4).style.display = "none"
        document.querySelector(hidecont5).style.display = "none"
        document.querySelector(hidecont6).style.display = "none"
        document.querySelector(hidecont7).style.display = "none"
    })
}
filterContShow(".memberfilterbtn", ".memberfiltercont", ".accountfiltercont", ".categoryfiltercont", ".txtypefiltercont", ".statusfiltercont", ".dateyearfiltercont", ".datemonthfiltercont", ".filterbysearchcont")
filterContShow(".accountfilterbtn", ".accountfiltercont", ".memberfiltercont", ".categoryfiltercont", ".txtypefiltercont", ".statusfiltercont", ".dateyearfiltercont", ".datemonthfiltercont", ".filterbysearchcont")
filterContShow(".categoryfilterbtn", ".categoryfiltercont", ".memberfiltercont", ".accountfiltercont", ".txtypefiltercont", ".statusfiltercont", ".dateyearfiltercont", ".datemonthfiltercont", ".filterbysearchcont")
filterContShow(".transactiontypefilterbtn", ".txtypefiltercont", ".memberfiltercont", ".accountfiltercont", ".categoryfiltercont", ".statusfiltercont", ".dateyearfiltercont", ".datemonthfiltercont", ".filterbysearchcont")
filterContShow(".statusfilterbtn", ".statusfiltercont", ".memberfiltercont", ".accountfiltercont", ".categoryfiltercont", ".txtypefiltercont", ".dateyearfiltercont", ".datemonthfiltercont", ".filterbysearchcont")
filterContShow(".datefilterbtn", ".dateyearfiltercont", ".memberfiltercont", ".accountfiltercont", ".categoryfiltercont", ".txtypefiltercont", ".statusfiltercont", ".datemonthfiltercont", ".filterbysearchcont")
filterContShow(".datefilterbtn", ".dateyearfiltercont", ".memberfiltercont", ".accountfiltercont", ".categoryfiltercont", ".txtypefiltercont", ".statusfiltercont", ".datemonthfiltercont", ".filterbysearchcont")
filterContShow(".contentfilterbtn", ".filterbysearchcont", ".dateyearfiltercont", ".memberfiltercont", ".accountfiltercont", ".categoryfiltercont", ".txtypefiltercont", ".statusfiltercont", ".datemonthfiltercont")


//to handle filter button click
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
var globalCategoriesArr = []
var currentIndex = null
var currentRunningDate = null;
var currentFilterYear = null;
var currentFilterMonth = null;


//handle year click under date filter and to store the year value
const yearfiltercont = (btn) => {
    document.querySelector(btn).addEventListener("click", () => {
        document.querySelector(".datemonthfiltercont").style.display = "block"

        if (btn == ".year2023filter") {
            currentFilterYear = 2023
        } else if (btn == ".year2022filter") {
            currentFilterYear = 2022
        } else if (".year2021filter") {
            currentFilterYear = 2021
        } else {
            currentFilterYear = null
        }
    })
}
yearfiltercont(".year2023filter")
yearfiltercont(".year2022filter")
yearfiltercont(".year2021filter")


//handle month click & to apply date filter 
let getAllTheMonthsFromFilter = document.querySelectorAll(".text-block-9")
let getAllTheMonthsFromFilterArrLoc = [...getAllTheMonthsFromFilter]
getAllTheMonthsFromFilterArrLoc.map((ele) => {
    ele.addEventListener("click", () => {
        const clickedMonthStr = ele.innerText

        allTransactionDataArr.map((ele, i) => {
            if (i !== 0) {
                const currentDate = ele.querySelector(".datecont div").innerText
                const datePartsArr = currentDate.split(" ")
                const curMonthStr = datePartsArr[0]
                const curYearStr = datePartsArr[2]

                if (currentFilterYear == curYearStr && curMonthStr == clickedMonthStr) {
                    ele.style.display = "flex"
                } else {
                    ele.style.display = "none"
                }
            }
        })
        hideFiltersFun()
    })
})

// to show date associated with transactions
const showDateInTheTable = () => {
    let allTransactionRowDataLoc = document.querySelectorAll(".transaction-history-row")
    let allTransactionDataArrLoc = [...allTransactionRowDataLoc]
    let allDateRowDiv = document.querySelectorAll(".date-cont-div")
    let allDateRowDivArrLoc = [...allDateRowDiv]

    allDateRowDivArrLoc.map((ele, i) => {
        ele.style.display = "none"
    })

    allTransactionDataArrLoc.map((ele, i) => {
        if (i !== 0) {
            const currentDate = ele.querySelector(".datecont div").innerText
            let currentDateMonth = currentDate.substring(0, currentDate.length - 6);
            let displayValue = ele.style.display.replace(/\s{2,}/g, ' ').trim()
            displayValue = `/${displayValue}/`;

            if (displayValue == "/none/") {
                console.log("display none")
            } else {
                if (currentDate != currentRunningDate) {
                    const dateContAbove = document.createElement("div");
                    const monthNames = ["January", "February", "March", "April", "May",
                        "June", "July", "August", "September", "October", "November", "December"];

                    const date = new Date();
                    let day = date.getDate();
                    let month = monthNames[date.getMonth()];
                    let year = date.getFullYear();
                    let curDate = `${month} ${day}, ${year}`

                    let previous = new Date(date.getTime());
                    previous.setDate(date.getDate() - 1)

                    let dayPre = previous.getDate();
                    let monthPre = monthNames[previous.getMonth()];
                    let yearPre = previous.getFullYear();
                    let preDate = `${monthPre} ${dayPre}, ${yearPre}`

                    if (curDate == currentDate) {
                        dateContAbove.innerText = `Today, ${currentDateMonth}`;
                    } else if (preDate == currentDate) {
                        dateContAbove.innerText = `Yesterday, ${currentDateMonth}`;
                    } else {
                        dateContAbove.innerText = currentDateMonth;
                    }

                    dateContAbove.style.width = "100%";
                    dateContAbove.style.textAlign = "center";
                    dateContAbove.style.color = "gray";
                    dateContAbove.style.margin = "7px 0px";
                    dateContAbove.style.fontSize = "14px";
                    dateContAbove.classList.add("date-cont-div")
                    ele.parentNode.insertBefore(dateContAbove, ele);
                    currentRunningDate = currentDate
                }
            }
        }

        if (i === allTransactionDataArrLoc - 1) {
            currentRunningDate = null;
        }
    })
}
showDateInTheTable()

//to hide all filters
const hideFiltersFun = () => {
    document.querySelector(".memberfiltercont").style.display = "none"
    document.querySelector(".accountfiltercont").style.display = "none"
    document.querySelector(".categoryfiltercont").style.display = "none"
    document.querySelector(".txtypefiltercont").style.display = "none"
    document.querySelector(".statusfiltercont").style.display = "none"
    document.querySelector(".dateyearfiltercont").style.display = "none"
    document.querySelector(".datemonthfiltercont").style.display = "none"
    document.querySelector(".alltypefiltercont").style.display = "none"
    document.querySelector(".filterbysearchcont").style.display = "none"
    document.querySelector(".filterbysearchcont").style.display = "none"
    showDateInTheTable()
}

//to initialize categories global array to update later
const initializeGlobalCategoriesArr = () => {
    allTransactionDataArr.map((ele, i) => {
        if (i !== 0) {
            let txCategoryRowText = ele.querySelector(".categorytabledatacont h4").innerText;
            let trimedTxCategoryRowText = txCategoryRowText.replace(/\s{2,}/g, ' ').trim()
            globalCategoriesArr.push(trimedTxCategoryRowText)
        }
    })
}
initializeGlobalCategoriesArr()

//to set updated categories in the table
const setCategoryInTable = () => {
    allTransactionDataArr.map((ele, i) => {
        if (i !== 0 && ele.querySelector(".categorytabledatacont h4") && globalCategoriesArr[i - 1]) {
            ele.querySelector(".categorytabledatacont h4").innerText = globalCategoriesArr[i - 1]
        }
    })
}
setCategoryInTable()


//handle content search filter 
document.querySelector(".contentinputbox").addEventListener("change", (e) => {
    let inputValue = e.target.value
    const patt = new RegExp(inputValue, "i");
    allTransactionDataArr.map((ele, i) => {
        if (i !== 0) {
            if (inputValue) {
                let txTransactionNameRowText = ele.querySelector(".transaction-tx-name").innerText;
                let trimedTxTransactionNameRowText = txTransactionNameRowText.replace(/\s{2,}/g, ' ').trim()
                const res = patt.test(trimedTxTransactionNameRowText);

                if (res) {
                    ele.style.display = "flex"
                } else {
                    ele.style.display = "none"
                }
            } else {
                ele.style.display = "flex"
            }
        }
    })
});


// to hide search filter after submit
document.querySelector(".filterbysearchcont").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector(".w-form-done").style.display = "none"
    hideFiltersFun()
});


//handle account filter click
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
        hideFiltersFun()
    })
})

//handle category filter click
let categoriesSelectorsArr = document.querySelectorAll(".div-block-16")
let categoriesArr = [...categoriesSelectorsArr]
categoriesArr.map((ele) => {
    ele.addEventListener("click", () => {

        let clickedCategory = ele.innerText
        let trimedClickedCategory = clickedCategory.replace(/\s{2,}/g, ' ').trim()

        allTransactionDataArr.map((ele, i) => {
            if (i !== 0) {
                let txCategoryRowText = ele.querySelector(".transaction-emoji-category h4").innerText;
                let trimedTxCategoryRowText = txCategoryRowText.replace(/\s{2,}/g, ' ').trim()

                if (trimedTxCategoryRowText == trimedClickedCategory) {
                    ele.style.display = "flex"
                } else {
                    ele.style.display = "none"
                }
            }
        })

        hideFiltersFun()
    })
})


//handle transaction type filter
let txTypesSelectorsArr = document.querySelectorAll(".div-block-18")
let txTypesArr = [...txTypesSelectorsArr]
txTypesArr.map((ele) => {
    ele.addEventListener("click", () => {
        const imageELe = ele.querySelector("img")
        const imageURL1 = imageELe.getAttribute("src")

        let fileNameArr1 = imageURL1.split("_")
        let fileName1 = "1";

        if (fileNameArr1.length > 0) {
            let LocfileName1 = fileNameArr1[fileNameArr1.length - 1];
            let LocfileNameArrByBot1 = LocfileName1.split(".")
            fileName1 = LocfileNameArrByBot1[LocfileNameArrByBot1.length - 2]
        }

        allTransactionDataArr.map((ele, i) => {
            if (i !== 0) {
                let txTransactionNameRowText = ele.querySelector(".transaction-tx-name img");
                const imageURL2 = txTransactionNameRowText.getAttribute("src")

                let fileNameArr2 = imageURL2.split("_")
                let fileName2 = "2";

                if (fileNameArr2.length > 0) {
                    let LocfileName2 = fileNameArr2[fileNameArr2.length - 1];
                    let LocfileNameArrByBot2 = LocfileName2.split(".")
                    fileName2 = LocfileNameArrByBot2[LocfileNameArrByBot2.length - 2]
                }

                if (fileName1 == fileName2) {
                    ele.style.display = "flex"
                } else {
                    ele.style.display = "none"
                }
            }
        })

        hideFiltersFun()
    })
})

//handle status filter
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

        hideFiltersFun()
    })
})


//handle member filter
const onClickMember = (btn) => {
    document.querySelector(btn).addEventListener("click", () => {
        const filterBtnSelector = document.querySelector(btn)
        const clickedmember = filterBtnSelector.innerText
        let trimedMember = clickedmember.replace(/\s+/g, '')
        let memberNameSP = ""
        let memberNameP = ""

        if (trimedMember == "Ella") {
            memberNameSP = "‍Ella‍"
            memberNameP = "Ella‍"
        } else if (trimedMember == "Eric") {
            memberNameSP = "‍Eric‍"
            memberNameP = "Eric‍"
        } else if (trimedMember == "Joe") {
            memberNameSP = "‍Joe‍"
            memberNameP = "Joe‍"
        } else if (trimedMember == "Linda") {
            memberNameSP = "‍Linda‍"
            memberNameP = "Linda‍"
        } else if (trimedMember == "Oliver") {
            memberNameSP = "‍Oliver‍"
            memberNameP = "Oliver‍"
        } else if (trimedMember == "Sophia") {
            memberNameSP = "‍Sophia‍"
            memberNameP = "Sophia‍"
        } else if (trimedMember == "You") {
            memberNameSP = "‍You‍"
            memberNameP = "You‍"
        }

        allTransactionDataArr.map((ele, i) => {
            if (i !== 0) {
                let txMemberRowText = ele.querySelector(".transaction-member").innerText;
                let trimedTxMemberRowText = txMemberRowText.replace(/\s+/g, '')
                if (trimedTxMemberRowText == memberNameSP || trimedTxMemberRowText == memberNameP || trimedTxMemberRowText == trimedMember) {
                    ele.style.display = "flex"
                } else {
                    ele.style.display = "none"
                }
            }
        })

        hideFiltersFun()
    })
}
onClickMember(".ellaaccountfilter")
onClickMember(".ericaccountfilter")
onClickMember(".joeaccountfilter")
onClickMember(".lindaaccountfilter")
onClickMember(".oliveraccountfilter")
onClickMember(".shophiaaccountfilter")
onClickMember(".youaccountfilter")

//to hide update drop down (need to review)
const hideEveryCategoryOption = () => {
    allTransactionDataArr.map((ele, i) => {
        if (i != 0) {
            ele.querySelector(".transaction-emoji-category .div-block-23").style.display = "none"
        }
    })
}
hideEveryCategoryOption()


//to show category update dialog
allTransactionDataArr.map((ele, i) => {
    if (i != 0) {
        ele.querySelector(".transaction-emoji-category h4").addEventListener("click", () => {
            hideEveryCategoryOption()
            ele.querySelector(".transaction-emoji-category .div-block-23").style.display = "block"
            currentIndex = i - 1;
        })
    }
})

//to handle category update in the table
let categoriesSelectorsArrForUpdate = document.querySelectorAll(".category-change-category")
let categoriesArrForUpdate = [...categoriesSelectorsArrForUpdate]
categoriesArrForUpdate.map((ele) => {
    ele.addEventListener("click", () => {
        let clickedCategory = ele.innerText
        let trimedClickedCategory = clickedCategory.replace(/\s{2,}/g, ' ').trim()

        globalCategoriesArr[currentIndex] = trimedClickedCategory
        setCategoryInTable()
        addBGColorAndColorToCategory()
        let allCategoryOptionDialog = document.querySelectorAll(".div-block-23")
        let allCategoryOptionDialogArr = [...allCategoryOptionDialog]
        allCategoryOptionDialogArr.map((ele, i) => {
            ele.style.display = "none"
        })
    })
})


//to reset all the filters
document.querySelector(".resetbtn").addEventListener("click", () => {
    allTransactionDataArr.map((ele, i) => {
        if (i !== 0) {
            ele.style.display = "flex"
        }
    })
    hideFiltersFun()
})


//to handle account search input in account filter
let allAccountsTitleFromFilter = document.querySelectorAll(".div-block-14")
let allAccountsTitleFromFilterArrLoc = [...allAccountsTitleFromFilter]
document.querySelector(".accountsearchinputfield").addEventListener("change", (e) => {
    const inputValue = e.target.value
    const patt = new RegExp(inputValue, "i");

    if (!inputValue || inputValue.length == 0) {
        allAccountsTitleFromFilterArrLoc.map((ele) => { ele.style.display = "block" })
    } else {
        allAccountsTitleFromFilterArrLoc.map((ele) => {
            if (patt.test(ele.innerText)) {
                ele.style.display = "block"
            } else {
                ele.style.display = "none"
            }
        })
    }
})



//to handle search input in category filter dialog
let allCategoryTextFromFilter = document.querySelectorAll(".text-block-6")
let allCategoryTextFromFilterArrLoc = [...allCategoryTextFromFilter]
document.querySelector(".search-category-input-filter").addEventListener("change", (e) => {
    const inputValue = e.target.value
    const patt = new RegExp(inputValue, "i");

    if (!inputValue || inputValue.length == 0) {
        allCategoryTextFromFilterArrLoc.map((ele) => { ele.style.display = "block" })
    } else {
        allCategoryTextFromFilterArrLoc.map((ele) => {
            if (patt.test(ele.innerText)) {
                ele.style.display = "block"
            } else {
                ele.style.display = "none"
            }

        })
    }
})


//to handle serach input in category update dialog
let allCategorySearchInputForUpdate = document.querySelectorAll(".category-search-input-for-update")
let allCategorySearchInputForUpdateArrLoc = [...allCategorySearchInputForUpdate]
allCategorySearchInputForUpdateArrLoc.map((ele1) => {
    ele1.addEventListener("change", (e) => {

        const inputValue = e.target.value
        const patt = new RegExp(inputValue, "i");

        if (!inputValue || inputValue.length == 0) {
            allCategoryTextFromFilterArrLoc.map((ele) => { ele.style.display = "block" })
        } else {
            allCategoryTextFromFilterArrLoc.map((ele) => {
                if (patt.test(ele.innerText)) {
                    ele.style.display = "block"
                } else {
                    ele.style.display = "none"
                }

            })
        }

    })
})





// link have to add -> https://99graphics.github.io/test-wallio/activityPage.js