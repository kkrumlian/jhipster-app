package com.openclinica.ui.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Study.
 */
@Entity
@Table(name = "STUDY")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Study extends AbstractAuditingEntity implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.TABLE)
  private long id;

  @Size(min = 1, max = 255)
  @Column(name = "instance_url")
  private String instanceUrl;

  @Size(min = 1, max = 255)
  @Column(name = "study_oid")
  private String studyOid;

  // @NotAudited
  @ManyToOne
  @JoinColumn(name="organization_id")
  private Organization organization;

  public long getId() {
      return id;
  }

  public void setId(long id) {
      this.id = id;
  }

  public String getInstanceUrl() {
      return instanceUrl;
  }

  public void setInstanceUrl(String instanceUrl) {
      this.instanceUrl = instanceUrl;
  }

  public String getStudyOid() {
      return studyOid;
  }

  public void setStudyOid(String studyOid) {
      this.studyOid = studyOid;
  }

  public Organization getOrganization() {
      return organization;
  }

  public void setOrganization(Organization organization) {
      this.organization = organization;
  }

  @Override
  public boolean equals(Object o) {
      if (this == o) {
          return true;
      }
      if (o == null || getClass() != o.getClass()) {
          return false;
      }

      Study study = (Study) o;

      if (id != study.id) {
          return false;
      }

      return true;
  }

  @Override
  public int hashCode() {
      return (int) (id ^ (id >>> 32));
  }

  @Override
  public String toString() {
      return "Study{" +
              "id=" + id +
              ", instanceUrl='" + instanceUrl + '\'' +
              ", studyOid=" + studyOid +
              '}';
  }
}
