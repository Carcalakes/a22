// Example stock data (companies from Bawsaq)
const stockData = [
    {name: "Redwood", symbol: "RWD", price: 100, change: 0},
    {name: "FlyUS", symbol: "FLY", price: 50, change: 0},
    {name: "Fruit", symbol: "FRT", price: 75, change: 0},
    {name: "Debonaire", symbol: "DBN", price: 150, change: 0},
    {name: "LifeInvader", symbol: "LIF", price: 200, change: 0},
    {name: "Bahama Mamas", symbol: "BM", price: 125, change: 0}
];

// User's initial portfolio
let portfolio = {
    balance: 1000,
    stocks: {}
};

// Display stocks on the marketplace
function displayStocks() {
    const stockContainer = document.getElementById("stocks");
    stockContainer.innerHTML = "";
    
    stockData.forEach(stock => {
        const stockElement = document.createElement("div");
        stockElement.classList.add("stock-item");
        stockElement.innerHTML = `
            <h2>${stock.name} (${stock.symbol})</h2>
            <p>Price: $${stock.price}</p>
            <p class="arrow">${stock.change >= 0 ? "↑" : "↓"} $${Math.abs(stock.change)}</p>
            <button onclick="buyStock('${stock.symbol}')">Buy</button>
        `;
        stockContainer.appendChild(stockElement);
    });
}

// Buy stock functionality
function buyStock(symbol) {
    const stock = stockData.find(s => s.symbol === symbol);
    if (stock && portfolio.balance >= stock.price) {
        portfolio.balance -= stock.price;
        if (!portfolio.stocks[symbol]) {
            portfolio.stocks[symbol] = { name: stock.name, symbol: stock.symbol, quantity: 0, price: stock.price };
        }
        portfolio.stocks[symbol].quantity += 1;
        stock.price *= 1.01;  // Increase stock price by 1%
        stock.change = 1;  // Mark stock as increased
        
        alert(`You bought 1 share of ${stock.name}. Your new balance is $${portfolio.balance}`);
        displayStocks();  // Refresh stock prices
    }
}

// Logout functionality (reset the page)
function logout() {
    portfolio = { balance: 
