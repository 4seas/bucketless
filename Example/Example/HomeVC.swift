//
//  HomeVC.swift
//  Example
//
//  Created by Sara Du on 2/26/16.
//  Copyright © 2016 Sara Du. All rights reserved.
//

import UIKit

class HomeVC: UITableViewController{

    var names : [String] = ["Go to Paris", "Ride Camels in the Sahara", "Visit Machu Picchu"]
    var locationnames: [String] = ["Paris", "Sahara Desert", "Peru"]
    var images = ["paris", "ridecamels", "machu"]
    var whocreated = ["You created a dream","Jack completed a dream", "Felix is looking for friends to go"]
    var currentindex = 0
       override func viewDidLoad() {
        super.viewDidLoad()
        /*
        let backgroundImage = UIImage(named: "watercolor")
        
        let imageView = UIImageView(image: backgroundImage)
        imageView.contentMode = .ScaleAspectFill
        self.tableView.backgroundView = imageView
        
        let blurEffect = UIBlurEffect(style: UIBlurEffectStyle.Light)
        let blurView = UIVisualEffectView(effect: blurEffect)
        blurView.frame = imageView.bounds
        imageView.addSubview(blurView)
        */
        
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
        cell.createdat.text = whocreated[indexPath.section]
        cell.layer.cornerRadius = 10
        return cell
        
    }
    override func tableView(tableView: UITableView, heightForRowAtIndexPath indexPath: NSIndexPath) -> CGFloat {
        return 300.0
    }
    override func tableView(tableView: UITableView, heightForFooterInSection section: Int) -> CGFloat {
        return 10
    }
    override func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {
        currentindex = indexPath.section

    
        self.performSegueWithIdentifier("detail", sender: self)
        
    }
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        if(segue.identifier == "detail"){
        let vc: DetailVC = segue.destinationViewController as! DetailVC
        vc.imagename = images[currentindex]
        }
        /*
        let detailview  = segue.destinationViewController as! DetailVC
        detailview.imageitem.image = UIImage(named:images[currentindex])
        detailview.locationname.text = locationnames[currentindex]
    */
    }
    @IBAction func unwind(segue: UIStoryboardSegue) {
    }
}
