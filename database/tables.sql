-- 1. Products Table
CREATE TABLE Products (
    ProductID NUMBER(10) PRIMARY KEY,
    ProductName VARCHAR2(100) NOT NULL,
    Category VARCHAR2(50),
    Price NUMBER(10, 2) NOT NULL,
    QuantityInStock NUMBER(10) NOT NULL
);

-- 2. Orders Table
CREATE TABLE Orders (
    OrderID NUMBER(10) PRIMARY KEY,
    CustomerName VARCHAR2(100) NOT NULL,
    OrderDate DATE DEFAULT SYSDATE,
    TotalAmount NUMBER(10, 2) NOT NULL
);

-- 3. OrderDetails Table
CREATE TABLE OrderDetails (
    DetailID NUMBER(10) PRIMARY KEY,
    OrderID NUMBER(10) NOT NULL,
    ProductID NUMBER(10) NOT NULL,
    Quantity NUMBER(10) NOT NULL,
    Subtotal NUMBER(10, 2) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

