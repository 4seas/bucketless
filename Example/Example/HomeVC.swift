//
//  HomeVC.swift
//  Example
//
//  Created by Sara Du on 2/26/16.
//  Copyright © 2016 Sara Du. All rights reserved.
//

import UIKit

class HomeVC: UITableViewController{

    var names : [String] = ["Paris", "London"]
    var images = ["paris", "london"]
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
        
        
        self.tableView.registerNib(UINib(nibName: "Cells", bundle: nil), forCellReuseIdentifier: "cell")
    }

    override func tableView(tableView: UITableView, willDisplayCell cell: UITableViewCell, forRowAtIndexPath indexPath: NSIndexPath) {
        cell.backgroundColor = UIColor(white: 1, alpha: 0.5)
    }
    
   override func numberOfSectionsInTableView(tableView: UITableView) -> Int {
        // #warning Incomplete implementation, return the number of sections
        return 2
    }

    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // #warning Incomplete implementation, return the number of rows
        return 1
    }
     override func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell : Cell = tableView.dequeueReusableCellWithIdentifier("cell") as! Cell
        // Configure the cell...
        cell.name.text = names[indexPath.section]
        cell.imagecell.image = UIImage(named: images[indexPath.section])
        cell.layer.cornerRadius = 10
        return cell
        
    }
     override func tableView(tableView: UITableView, heightForRowAtIndexPath indexPath: NSIndexPath) -> CGFloat {
        return 165.0
    }
    override func tableView(tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        return 100
    }
}
