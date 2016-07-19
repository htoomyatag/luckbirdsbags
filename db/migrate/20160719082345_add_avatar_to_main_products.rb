class AddAvatarToMainProducts < ActiveRecord::Migration
  def up
    add_attachment :main_products, :avatar
  end

  def down
    remove_attachment :main_products, :avatar
  end
end
