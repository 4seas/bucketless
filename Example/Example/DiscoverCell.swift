//
//  DiscoverCell.swift
//  Example
//
//  Created by Sara Du on 2/27/16.
//  Copyright © 2016 Sara Du. All rights reserved.
//

import UIKit

class DiscoverCell: UITableViewCell {
    @IBOutlet var imagecell: UIImageView!
    @IBOutlet var name: UILabel!
   
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
