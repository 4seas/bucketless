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
    @IBOutlet weak var add: UIButton!
    @IBOutlet weak var complete: UIButton!
    @IBOutlet var createdat: UILabel?
    @IBOutlet var addlabel: UILabel!
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

    @IBAction func addtolist(sender: AnyObject) {
    }
    @IBOutlet weak var completelist: UIButton!
}
