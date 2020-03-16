class StockSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :symbol, :companyName, :latestPrice, :open, :close
  has_one :user
end
