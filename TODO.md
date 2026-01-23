# TODO for Fixing MERN Trading Dashboard Issues

- [x] Update /newOrder route in backend/index.js: Add type casting (parse qty, price to numbers) and validation (positive numbers, etc.)
- [x] Add GET /api/stock/:symbol route in backend/index.js: Mock stock price response
- [x] Update BuyActionWindow.js: Parse stockQuantity and stockPrice to numbers before sending
- [x] Update SellActionWindow.js: Parse stockQuantity and stockPrice to numbers before sending
- [x] Verify HoldingsModel.js and OrdersModel.js (schemas are correct, no changes needed)
