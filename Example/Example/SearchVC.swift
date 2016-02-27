//
//  SearchVC.swift
//  Example
//
//  Created by Sara Du on 2/27/16.
//  Copyright © 2016 Sara Du. All rights reserved.
//

import UIKit

class SearchVC: UIViewController, UITableViewDelegate, UITableViewDataSource {
    var names : [String] = ["Top 10 Bucket Dreams", "2016 Popular Bucket Restaurants"]
    var images = ["paris", "london"]
    @IBOutlet var tableview: UITableView!
    @IBOutlet weak var search: UISearchBar!
    override func viewDidLoad() {
        super.viewDidLoad()
        tableview.delegate = self
        tableview.dataSource = self
        self.tableview.registerNib(UINib(nibName: "DiscoverCell", bundle: nil), forCellReuseIdentifier: "cell")
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func numberOfSectionsInTableView(tableView: UITableView) -> Int {
        return 2
    }
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 1
    }
    func tableView(tableView: UITableView, heightForFooterInSection section: Int) -> CGFloat {
        return 10
    }
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell : DiscoverCell = tableView.dequeueReusableCellWithIdentifier("cell") as! DiscoverCell
        // Configure the cell...
        cell.name.text = names[indexPath.section]
        cell.imagecell.image = UIImage(named: images[indexPath.section])
        
        cell.layer.cornerRadius = 10
        return cell

    }
    func tableView(tableView: UITableView, heightForRowAtIndexPath indexPath: NSIndexPath) -> CGFloat {
        return 300.0
    }
    
    func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {
        self.performSegueWithIdentifier("list", sender: self)
    }
    
    
}
