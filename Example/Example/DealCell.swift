//
//  DealCell.swift
//  iBucket
//
//  Created by Sara Du on 2/27/16.
//  Copyright © 2016 Sara Du. All rights reserved.
//

import UIKit

class DealCell: UITableViewCell {

    @IBOutlet var costlabel: UILabel!
    @IBOutlet var dealname: UILabel!
    @IBOutlet var dealimage: UIImageView!
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
