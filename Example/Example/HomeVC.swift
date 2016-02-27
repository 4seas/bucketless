//
//  HomeVC.swift
//  Example
//
//  Created by Sara Du on 2/26/16.
//  Copyright © 2016 Sara Du. All rights reserved.
//

import UIKit

class HomeVC: UITableViewController {
    var names : [String] = ["Agua", "Flappy Nation"]
    var logos = ["agualogo", "Flappy Nation"]
    var blur = UIBlurEffect()
    var blurView = UIVisualEffectView()
    override func viewDidLoad() {
        super.viewDidLoad()
        let backgroundImage = UIImage(named: "watercolor")
        
        let imageView = UIImageView(image: backgroundImage)
        imageView.contentMode = .ScaleAspectFill
        self.tableView.backgroundView = imageView
        
        let blurEffect = UIBlurEffect(style: UIBlurEffectStyle.Light)
        let blurView = UIVisualEffectView(effect: blurEffect)
        blurView.frame = imageView.bounds
        imageView.addSubview(blurView)
        
        
        self.tableView.registerNib(UINib(nibName: "Cell", bundle: nil), forCellReuseIdentifier: "Cell")
    }

    override func tableView(tableView: UITableView, willDisplayCell cell: UITableViewCell, forRowAtIndexPath indexPath: NSIndexPath) {
        cell.backgroundColor = UIColor(white: 1, alpha: 0.5)
    }
    
    override func numberOfSectionsInTableView(tableView: UITableView) -> Int {
        // #warning Incomplete implementation, return the number of sections
        return 1
    }

    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // #warning Incomplete implementation, return the number of rows
        return 10
    }
}
