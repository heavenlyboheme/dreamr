module Types
  class PostType < Types::BaseObject
    field :dream_details, String, null: true
    field :dream_title, String, null: true
    field :id, ID, null: true
  end
end
