//
//  BucketListVC.swift
//  iBucket
//
//  Created by Sara Du on 2/27/16.
//  Copyright © 2016 Sara Du. All rights reserved.
//

import UIKit

class BucketListVC: UITableViewController {

    var names : [String] = ["Skydive in Dubai", "Ride the London Eye", "Climb the Great Wall"]
    var images = ["skydive", "london", "greatwall"]
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.tableView.registerNib(UINib(nibName: "Cells", bundle: nil), forCellReuseIdentifier: "cell")
        
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    // MARK: - Table view data source
    
    override func numberOfSectionsInTableView(tableView: UITableView) -> Int {
        // #warning Incomplete implementation, return the number of sections
        return 3
    }
    
    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // #warning Incomplete implementation, return the number of rows
        return 1
    }
    
    override func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell : Cell = tableView.dequeueReusableCellWithIdentifier("cell") as! Cell
        // Configure the cell...
        cell.name.text = names[indexPath.section]
        cell.createdat!.text = "You completed a bucketlist item! "
        cell.imagecell.image = UIImage(named: images[indexPath.section])
        cell.layer.cornerRadius = 10
        return cell
        
    }
    override func tableView(tableView: UITableView, heightForRowAtIndexPath indexPath: NSIndexPath) -> CGFloat {
        return 300.0
    }
    override func tableView(tableView: UITableView, heightForFooterInSection section: Int) -> CGFloat {
        return 10
    }
}
