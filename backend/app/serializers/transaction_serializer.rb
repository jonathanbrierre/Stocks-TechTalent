class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :bought, :quantity, :symbol, :companyName, :latestPrice
  has_one :user
end
