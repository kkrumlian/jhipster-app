package com.mycompany.myapp.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Authorization.
 */
@Entity
@Table(name = "PP_AUTHORIZATION")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Authorization extends AbstractAuditingEntity implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.TABLE)
  private long id;

  @Size(min = 1, max = 512)
  @Column(name = "pform_url")
  private String pformUrl;

  @OneToOne
  @JoinColumn(name="study_id")
  private Study study;    

  @OneToOne
  @JoinColumn(name="pp_authorization_status_id")
  private AuthorizationStatus authorizationStatus;

  @Size(min = 1, max = 512)
  @Column(name = "pform_api_key")
  private String pformApiKey;

  public long getId() {
      return id;
  }

  public void setId(long id) {
      this.id = id;
  }

  public String getPformUrl() {
      return pformUrl;
  }

  public void setPformUrl(String pformUrl) {
      this.pformUrl = pformUrl;
  }

  public Study getStudy() {
      return study;
  }

  public void setStudy(Study study) {
      this.study = study;
  }

  public AuthorizationStatus getAuthorizationStatus() {
      return authorizationStatus;
  }

  public void setAuthorizationStatus(AuthorizationStatus authorizationStatus) {
      this.authorizationStatus = authorizationStatus;
  }

  public String getPformApiKey() {
      return pformApiKey;
  }

  public void setPformApiKey(String pformApiKey) {
      this.pformApiKey = pformApiKey;
  }

  @Override
  public boolean equals(Object o) {
      if (this == o) {
          return true;
      }
      if (o == null || getClass() != o.getClass()) {
          return false;
      }

      Authorization authorization = (Authorization) o;

      if (id != authorization.id) {
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
      return "Authorization{" +
              "id=" + id +
              ", pformUrl='" + pformUrl + '\'' +
              ", pformApiKey=" + pformApiKey +
              '}';
  }
}
