CREATE TABLE MachineData (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  value VARCHAR(255),
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);