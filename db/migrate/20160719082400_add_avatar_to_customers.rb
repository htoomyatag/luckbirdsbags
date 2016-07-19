class AddAvatarToCustomers < ActiveRecord::Migration
  def up
    add_attachment :customers, :avatar
  end

  def down
    remove_attachment :customers, :avatar
  end
end
