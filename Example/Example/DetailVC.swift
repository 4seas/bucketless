//
//  DetailVC.swift
//  iBucket
//
//  Created by Sara Du on 2/27/16.
//  Copyright © 2016 Sara Du. All rights reserved.
//

import UIKit

class DetailVC: UIViewController, UITableViewDataSource, UITableViewDelegate{
    
    
    @IBOutlet weak var profileimages2: UIImageView!
    @IBOutlet weak var profileimages: UIImageView!
    @IBOutlet weak var tableview: UITableView!
    @IBOutlet weak var locationdescrip: UITextView!
    @IBOutlet weak var imageitem: UIImageView!
    @IBOutlet weak var locationname: UILabel!
    var imagename: String!
    var locationtext: String!
    var descriptext: String!
    var dealname: String!
    var dealcost: String!
    var dealimagename = ""
    
    override func viewDidLoad() {
        super.viewDidLoad()
        locationname.text = locationtext
        imageitem!.image = UIImage(named: imagename)
        
        self.tableview.registerNib(UINib(nibName: "DealCell", bundle: nil), forCellReuseIdentifier: "cell")
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell : DealCell = tableView.dequeueReusableCellWithIdentifier("cell") as! DealCell
        
        cell.costlabel.text = "\(dealcost)"
        cell.dealname.text = dealname
        cell.dealimage.image = UIImage(named: dealimagename)
        cell.layer.cornerRadius = 10
        return cell
    }
    func numberOfSectionsInTableView(tableView: UITableView) -> Int {
        
        return 1
        
    }
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        
        return 1
    }
    func tableView(tableView: UITableView, heightForRowAtIndexPath indexPath: NSIndexPath) -> CGFloat {
        return 300.0
    }
    @IBAction func plusclicked(sender: AnyObject) {
        profileimages2.hidden = false
    }
    @IBAction func checkclicked(sender: AnyObject) {
        profileimages.hidden = false
    }
    func tableView(tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        return 10
    }
}
