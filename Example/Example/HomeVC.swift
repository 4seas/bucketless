//
//  HomeVC.swift
//  Example
//
//  Created by Sara Du on 2/26/16.
//  Copyright © 2016 Sara Du. All rights reserved.
//

import UIKit

class HomeVC: UITableViewController{

    var names : [String] = ["Go to London", "Visit the Eiffel Tower", "See Mexico City", "Eat Sushi in Tokyo", "Visit the Oriental Pearl", "Go to Berlin", "Visit Montreal", "Go to Caracas", "Visit Dallas", "See the Big Apple"]
    var locationnames: [String] = ["London", "Paris", "Mexico City", "Tokyo", "Shanghai", "Berlin", "Montreal", "Caracas", "Dallas", "NYC"]
    var images: [String] = ["", ""]
    var whocreated = ["You created a dream","Jack completed a dream", "Felix is looking for friends", "You created a dream", "Jill is looking for friends", "You created a dream", "You created a dream", "You created a dream","You created a dream", "You created a dream"]
    var descriptionsarray: [String] = []
    var offernames: [String] = []
    var offercosts: [String] = []
    var currentindex = 0
       override func viewDidLoad() {
        super.viewDidLoad()
        self.parse()
        self.tableView.registerNib(UINib(nibName: "Cells", bundle: nil), forCellReuseIdentifier: "cell")
    }

    override func tableView(tableView: UITableView, willDisplayCell cell: UITableViewCell, forRowAtIndexPath indexPath: NSIndexPath) {
        cell.backgroundColor = UIColor(white: 1, alpha: 0.5)
    }
    
   override func numberOfSectionsInTableView(tableView: UITableView) -> Int {
        // #warning Incomplete implementation, return the number of sections
        return 10
    }

    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // #warning Incomplete implementation, return the number of rows
        return 1
    }
     override func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell : Cell = tableView.dequeueReusableCellWithIdentifier("cell") as! Cell
        
     
        
        cell.imagecell.image = UIImage(named: locationnames[indexPath.section])
        
        cell.name.text = names[indexPath.section]
        cell.createdat!.text = whocreated[indexPath.section]
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
        let vc: DetailVC = segue.destinationViewController as! DetailVC
        vc.imagename = images[currentindex]
        vc.locationtext = locationnames[currentindex]
        vc.dealcost = offercosts[currentindex]
        vc.dealname = offernames[currentindex]
    
    }
    @IBAction func unwind(segue: UIStoryboardSegue) {
    }
    func parse() {
        if let path = NSBundle.mainBundle().pathForResource("cities", ofType: "json") {
            do {
                let data = try NSData(contentsOfURL: NSURL(fileURLWithPath: path), options: NSDataReadingOptions.DataReadingMappedIfSafe)
                let jsonObj = JSON(data: data)
                if jsonObj != JSON.null {
                    let dict = jsonObj.dictionary!
                    for key in dict.keys {
                        let description = dict[key]!["description"]
                        let image = dict[key]!["image"]
                        let offertitle = dict[key]!["title_offer"]
                        let offercost = dict[key]!["offer_cost"]
                        let offerimage = dict[key]!["image_offer"]
                        descriptionsarray.append("\(description)")
                        images.append("\(image)")
                        offernames.append("\(offertitle)")
                        offercosts.append("\(offercost)")
            }
                    print("jsonData:\(jsonObj)")
                } else {
                    print("could not get json from file, make sure that file contains valid json.")
                }
            } catch let error as NSError {
                print(error.localizedDescription)
            }
        } else {
            print("Invalid filename/path.")
        }
    }

}
