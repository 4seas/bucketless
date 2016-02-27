//
//  Cell.swift
//  Example
//
//  Created by Sara Du on 2/26/16.
//  Copyright © 2016 Sara Du. All rights reserved.
//

import UIKit

class Cell: UITableViewCell {
    @IBOutlet var imagecell: UIImageView!
    @IBOutlet var name: UILabel!
    @IBOutlet var createdat: UILabel!
    @IBOutlet var addimage: UIImageView!
    @IBOutlet var addlabel: UILabel!
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
