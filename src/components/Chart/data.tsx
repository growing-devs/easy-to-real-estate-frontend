const data = {
  actual_transaction_price: [
    {
      contract_date: '2023-01-15',
      transaction_type: 'sale',
      price: 480000,
      floor: 5,
      asking_price: 520000,
    },
    {
      contract_date: '2023-02-28',
      transaction_type: 'rent',
      price: 120000,
      floor: 10,
      asking_price: 150000,
    },
    {
      contract_date: '2023-04-10',
      transaction_type: 'sale',
      price: 620000,
      floor: 8,
      asking_price: 650000,
    },
    {
      contract_date: '2023-04-10',
      transaction_type: 'sale',
      price: 920000,
      floor: 8,
      asking_price: 650000,
    },
    {
      contract_date: '2023-04-10',
      transaction_type: 'sale',
      price: 820000,
      floor: 8,
      asking_price: 650000,
    },
  ],
  market_price: [
    {
      reference_date: '2023-05-01',
      transaction_type: 'sale',
      lower_avg_price: 490000,
      avg_price: 510000,
      upper_avg_price: 530000,
      sales_vs_rent_price: '54~58',
    },
    {
      reference_date: '2023-06-01',
      transaction_type: 'rent',
      lower_avg_price: 230000,
      avg_price: 250000,
      upper_avg_price: 270000,
      sales_vs_rent_price: '33~36',
    },
    {
      reference_date: '2023-07-01',
      transaction_type: 'sale',
      lower_avg_price: 710000,
      avg_price: 730000,
      upper_avg_price: 750000,
      sales_vs_rent_price: '83~87',
    },
  ],
};
export default data;
