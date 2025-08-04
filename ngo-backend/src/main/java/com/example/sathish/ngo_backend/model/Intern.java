package com.example.sathish.ngo_backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "interns")
public class Intern {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    private String gender;

    @Column(nullable = false)
    private String highestQualification;

    @Column(nullable = false)
    private String college;

    @Column(nullable = false)
    private String country;

    @Column(nullable = false)
    private String contactNumber;

    @Column(nullable = false)
    private String internshipProgram;

    @Column(nullable = false)
    private String skillLevel;

    @Column(nullable = false)
    private String duration;

    @Column(nullable = false)
    private boolean interestedInJob;

    private String links;

    private LocalDateTime registrationDate;

    

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }
    public String getHighestQualification() { return highestQualification; }
    public void setHighestQualification(String highestQualification) { this.highestQualification = highestQualification; }
    public String getCollege() { return college; }
    public void setCollege(String college) { this.college = college; }
    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }
    public String getContactNumber() { return contactNumber; }
    public void setContactNumber(String contactNumber) { this.contactNumber = contactNumber; }
    public String getInternshipProgram() { return internshipProgram; }
    public void setInternshipProgram(String internshipProgram) { this.internshipProgram = internshipProgram; }
    public String getSkillLevel() { return skillLevel; }
    public void setSkillLevel(String skillLevel) { this.skillLevel = skillLevel; }
    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }
    public boolean isInterestedInJob() { return interestedInJob; }
    public void setInterestedInJob(boolean interestedInJob) { this.interestedInJob = interestedInJob; }
    public String getLinks() { return links; }
    public void setLinks(String links) { this.links = links; }
    public LocalDateTime getRegistrationDate() { return registrationDate; }
    public void setRegistrationDate(LocalDateTime registrationDate) { this.registrationDate = registrationDate; }
}