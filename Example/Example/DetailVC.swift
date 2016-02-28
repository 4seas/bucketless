//
//  DetailVC.swift
//  iBucket
//
//  Created by Sara Du on 2/27/16.
//  Copyright © 2016 Sara Du. All rights reserved.
//

import UIKit

class DetailVC: UIViewController {

    @IBOutlet weak var locationdescrip: UITextView!
    @IBOutlet weak var imageitem: UIImageView!
    @IBOutlet weak var locationname: UILabel!
    @IBOutlet weak var addImage: UIImageView!
    @IBOutlet weak var checkImage: UIImageView!
    var imagename: String!
    var locationtext: String!
    override func viewDidLoad() {
        super.viewDidLoad()
        locationname.text = locationtext
        imageitem!.image = UIImage(named: imagename)

        var imageView = checkImage
        var tapGestureRecognizer = UITapGestureRecognizer(target:self, action:Selector("checkImageTapped:"))
        imageView.userInteractionEnabled = true
        imageView.addGestureRecognizer(tapGestureRecognizer)

        imageView = addImage
        tapGestureRecognizer = UITapGestureRecognizer(target:self, action:Selector("addImageTapped:"))
        imageView.userInteractionEnabled = true
        imageView.addGestureRecognizer(tapGestureRecognizer)
    }

    func checkImageTapped(img: AnyObject) {
        locationdescrip.text = "check image tapped"
        print("check image tappped")
    }
    
    func addImageTapped(img: AnyObject) {
        print("add image tapped")
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
