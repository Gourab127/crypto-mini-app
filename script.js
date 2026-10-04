// Initialize Telegram WebApp
const tg = window.Telegram ? window.Telegram.WebApp : null;
if (tg) {
    tg.expand(); // Make app full screen in Telegram
}

let balance = 0.00;
let energy = 1000;

// Tab Switch Function
function switchTab(tabId, btnElement) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    btnElement.classList.add('active');
}

// Mining Tap Function
const coinBtn = document.getElementById('coin-btn');
const balanceEl = document.getElementById('user-balance');
const energyEl = document.getElementById('energy');

if (coinBtn) {
    coinBtn.addEventListener('click', () => {
        if (energy > 0) {
            balance += 0.01;
            energy -= 1;
            balanceEl.innerText = balance.toFixed(2);
            energyEl.innerText = energy;
        } else {
            alert("Energy depleted! Wait for recharge.");
        }
    });
}

// Deposit Submit
function submitDeposit() {
    const amount = document.getElementById('dep-amount').value;
    const txid = document.getElementById('dep-txid').value;

    if (!amount || !txid) {
        alert("Please enter both Amount and TxID!");
        return;
    }

    alert(`Deposit Request Sent!\nAmount: ${amount} USDT\nTxID: ${txid}\nStatus: Pending Admin Approval.`);
    document.getElementById('dep-amount').value = '';
    document.getElementById('dep-txid').value = '';
}

// Withdrawal Submit
function submitWithdraw() {
    const wallet = document.getElementById('with-wallet').value;
    const amount = document.getElementById('with-amount').value;

    if (!wallet || !amount) {
        alert("Please enter Wallet Address and Amount!");
        return;
    }

    if (parseFloat(amount) > balance) {
        alert("Insufficient balance!");
        return;
    }

    alert(`Withdrawal Request Submitted!\nAddress: ${wallet}\nAmount: ${amount} USDT`);
    document.getElementById('with-wallet').value = '';
    document.getElementById('with-amount').value = '';
}

// Copy Referral Link
function copyRef() {
    const refInput = document.getElementById('ref-link');
    refInput.select();
    document.execCommand('copy');
    alert("Referral link copied to clipboard!");
}
